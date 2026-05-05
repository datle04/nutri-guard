import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { AlertSeverity, FoodCategory } from '../generated/prisma/enums.js'
import { foodsData } from './data/foods-data.js'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })


async function main() {
  console.log('Seeding nutrients...')
  await seedNutrients()

  console.log('Seeding conditions...')
  await seedConditions()

  console.log('Seeding alert rules...')
  await seedAlertRules()

  console.log('Seeding foods...')
  await seedFoods()

  console.log('Done!')
}

// ── NUTRIENTS ──
async function seedNutrients() {
  const nutrients = [
    { name: 'calories',     unit: 'kcal' },
    { name: 'protein',      unit: 'g' },
    { name: 'fat',          unit: 'g' },
    { name: 'carbs',        unit: 'g' },
    { name: 'fiber',        unit: 'g' },
    { name: 'sugar',        unit: 'g' },
    { name: 'sodium',       unit: 'mg' },
    { name: 'cholesterol',  unit: 'mg' },
    { name: 'purine',       unit: 'mg' },
    { name: 'potassium',    unit: 'mg' },
    { name: 'calcium',      unit: 'mg' },
    { name: 'iron',         unit: 'mg' },
  ]
  for (const n of nutrients) {
    await prisma.nutrient.upsert({
      where: { name: n.name },
      update: {},
      create: n,
    })
  }
}

// ── CONDITIONS ──
async function seedConditions() {
  const conditions = [
    { name: 'DIABETES_TYPE1',   description: 'Tiểu đường type 1' },
    { name: 'DIABETES_TYPE2',   description: 'Tiểu đường type 2' },
    { name: 'GOUT',             description: 'Gout (tăng acid uric)' },
    { name: 'HYPERTENSION',     description: 'Huyết áp cao' },
    { name: 'HYPERLIPIDEMIA',   description: 'Mỡ máu cao' },
    { name: 'KIDNEY_DISEASE',   description: 'Bệnh thận mãn tính' },
  ]
  for (const c of conditions) {
    await prisma.condition.upsert({
      where: { name: c.name },
      update: {},
      create: c,
    })
  }
}

// ── ALERT RULES ──
async function seedAlertRules() {
  const rules: {
    conditionName: string
    nutrientName: string
    maxAmount: number
    severity: AlertSeverity
    message: string
  }[] = [
    // Tiểu đường — kiểm soát đường và carbs
    { conditionName: 'DIABETES_TYPE1', nutrientName: 'sugar',       maxAmount: 10,   severity: 'DANGER',  message: 'Lượng đường quá cao, nguy hiểm cho người tiểu đường type 1' },
    { conditionName: 'DIABETES_TYPE1', nutrientName: 'carbs',       maxAmount: 60,   severity: 'WARNING', message: 'Lượng carbs vượt mức khuyến nghị cho một bữa ăn' },
    { conditionName: 'DIABETES_TYPE2', nutrientName: 'sugar',       maxAmount: 15,   severity: 'DANGER',  message: 'Lượng đường quá cao, cần kiểm soát đường huyết' },
    { conditionName: 'DIABETES_TYPE2', nutrientName: 'carbs',       maxAmount: 75,   severity: 'WARNING', message: 'Lượng carbs cao, theo dõi đường huyết sau ăn' },
    // Gout — kiểm soát purine
    { conditionName: 'GOUT', nutrientName: 'purine',      maxAmount: 150,  severity: 'DANGER',  message: 'Thực phẩm giàu purine, có thể gây bùng phát cơn gout' },
    { conditionName: 'GOUT', nutrientName: 'purine',      maxAmount: 75,   severity: 'WARNING', message: 'Purine trung bình, hạn chế với người bị gout' },
    // Huyết áp cao — kiểm soát natri và cholesterol
    { conditionName: 'HYPERTENSION', nutrientName: 'sodium',      maxAmount: 600,  severity: 'DANGER',  message: 'Lượng natri rất cao, nguy hiểm cho người huyết áp cao' },
    { conditionName: 'HYPERTENSION', nutrientName: 'sodium',      maxAmount: 400,  severity: 'WARNING', message: 'Natri cao, nên hạn chế với người huyết áp cao' },
    { conditionName: 'HYPERTENSION', nutrientName: 'cholesterol', maxAmount: 100,  severity: 'INFO',    message: 'Nên theo dõi lượng cholesterol' },
    // Mỡ máu — kiểm soát fat và cholesterol
    { conditionName: 'HYPERLIPIDEMIA', nutrientName: 'cholesterol', maxAmount: 100,  severity: 'DANGER',  message: 'Cholesterol cao, không phù hợp cho người mỡ máu' },
    { conditionName: 'HYPERLIPIDEMIA', nutrientName: 'fat',         maxAmount: 20,   severity: 'WARNING', message: 'Chất béo cao, hạn chế với người mỡ máu' },
    // Bệnh thận — kiểm soát protein, kali, natri
    { conditionName: 'KIDNEY_DISEASE', nutrientName: 'protein',    maxAmount: 25,   severity: 'DANGER',  message: 'Protein cao, gây áp lực cho thận' },
    { conditionName: 'KIDNEY_DISEASE', nutrientName: 'potassium',  maxAmount: 400,  severity: 'WARNING', message: 'Kali cao, cần thận trọng với bệnh thận' },
    { conditionName: 'KIDNEY_DISEASE', nutrientName: 'sodium',     maxAmount: 400,  severity: 'WARNING', message: 'Natri cao, hạn chế với bệnh nhân thận' },
  ]

  for (const r of rules) {
    const condition = await prisma.condition.findUnique({ where: { name: r.conditionName } })
    const nutrient  = await prisma.nutrient.findUnique({ where: { name: r.nutrientName } })
    if (!condition || !nutrient) continue

    await prisma.alertRule.upsert({
      where: { conditionId_nutrientId: { conditionId: condition.id, nutrientId: nutrient.id } },
      update: {},
      create: {
        conditionId: condition.id,
        nutrientId:  nutrient.id,
        maxAmount:   r.maxAmount,
        severity:    r.severity,
        message:     r.message,
      },
    })
  }
}

// ── FOODS (sẽ mở rộng sau) ──
async function seedFoods() {
  const allNutrients = await prisma.nutrient.findMany()
  const nutrientMap = new Map(allNutrients.map(n => [n.name, n.id]))

  for (const food of foodsData) {
    const existing = await prisma.food.findFirst({ where: { name: food.name } })
    const created = existing ?? await prisma.food.create({
        data: {
            name: food.name,
            nameSearch: food.nameSearch,
            category: food.category,
            servingSize: food.servingSize,
        },
    })

    for (const n of food.nutrients) {
      const nutrientId = nutrientMap.get(n.name)
      if (!nutrientId) continue
      await prisma.foodNutrient.upsert({
        where: { foodId_nutrientId: { foodId: created.id, nutrientId } },
        update: { amount: n.amount },
        create: { foodId: created.id, nutrientId, amount: n.amount },
      })
    }
  }
}


main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
