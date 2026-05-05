import { FoodCategory } from '../../generated/prisma/enums.js'

export type FoodSeed = {
  name: string
  nameSearch: string
  category: FoodCategory
  servingSize: number
  nutrients: { name: string; amount: number }[]
}

// Nutritional values per 100g
export const foodsData: FoodSeed[] = [
  // ── RICE & NOODLE ──
  {
    name: 'Cơm trắng', nameSearch: 'com trang', category: 'RICE_NOODLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 130 }, { name: 'protein', amount: 2.7 },
      { name: 'fat', amount: 0.3 }, { name: 'carbs', amount: 28.2 },
      { name: 'fiber', amount: 0.3 }, { name: 'sugar', amount: 0 },
      { name: 'sodium', amount: 1 }, { name: 'potassium', amount: 35 },
    ],
  },
  {
    name: 'Bún', nameSearch: 'bun', category: 'RICE_NOODLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 109 }, { name: 'protein', amount: 2.4 },
      { name: 'fat', amount: 0.2 }, { name: 'carbs', amount: 24 },
      { name: 'fiber', amount: 0.2 }, { name: 'sugar', amount: 0 },
      { name: 'sodium', amount: 5 },
    ],
  },
  {
    name: 'Phở bò', nameSearch: 'pho bo', category: 'RICE_NOODLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 60 }, { name: 'protein', amount: 3.5 },
      { name: 'fat', amount: 1.5 }, { name: 'carbs', amount: 8.5 },
      { name: 'sodium', amount: 420 }, { name: 'purine', amount: 80 },
    ],
  },
  {
    name: 'Mì gói', nameSearch: 'mi goi', category: 'RICE_NOODLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 436 }, { name: 'protein', amount: 9 },
      { name: 'fat', amount: 17 }, { name: 'carbs', amount: 62 },
      { name: 'fiber', amount: 2 }, { name: 'sugar', amount: 2 },
      { name: 'sodium', amount: 1500 },
    ],
  },
  {
    name: 'Xôi', nameSearch: 'xoi', category: 'RICE_NOODLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 175 }, { name: 'protein', amount: 3.5 },
      { name: 'fat', amount: 0.5 }, { name: 'carbs', amount: 38 },
      { name: 'fiber', amount: 0.5 }, { name: 'sugar', amount: 0 },
      { name: 'sodium', amount: 5 },
    ],
  },
  {
    name: 'Bánh mì', nameSearch: 'banh mi', category: 'RICE_NOODLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 265 }, { name: 'protein', amount: 8 },
      { name: 'fat', amount: 3 }, { name: 'carbs', amount: 50 },
      { name: 'fiber', amount: 2 }, { name: 'sugar', amount: 3 },
      { name: 'sodium', amount: 490 },
    ],
  },

  // ── MEAT ──
  {
    name: 'Thịt heo nạc', nameSearch: 'thit heo nac', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 143 }, { name: 'protein', amount: 21 },
      { name: 'fat', amount: 6 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 62 }, { name: 'cholesterol', amount: 70 },
      { name: 'purine', amount: 150 },
    ],
  },
  {
    name: 'Thịt bò', nameSearch: 'thit bo', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 250 }, { name: 'protein', amount: 26 },
      { name: 'fat', amount: 15 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 72 }, { name: 'cholesterol', amount: 90 },
      { name: 'purine', amount: 120 },
    ],
  },
  {
    name: 'Thịt gà', nameSearch: 'thit ga', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 165 }, { name: 'protein', amount: 31 },
      { name: 'fat', amount: 3.6 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 74 }, { name: 'cholesterol', amount: 85 },
      { name: 'purine', amount: 115 },
    ],
  },
  {
    name: 'Lòng heo', nameSearch: 'long heo', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 182 }, { name: 'protein', amount: 16 },
      { name: 'fat', amount: 13 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 65 }, { name: 'cholesterol', amount: 200 },
      { name: 'purine', amount: 300 },
    ],
  },
  {
    name: 'Gan heo', nameSearch: 'gan heo', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 134 }, { name: 'protein', amount: 21 },
      { name: 'fat', amount: 4.4 }, { name: 'carbs', amount: 3.5 },
      { name: 'sodium', amount: 80 }, { name: 'cholesterol', amount: 301 },
      { name: 'purine', amount: 250 },
    ],
  },
  {
    name: 'Thịt vịt', nameSearch: 'thit vit', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 337 }, { name: 'protein', amount: 19 },
      { name: 'fat', amount: 29 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 74 }, { name: 'cholesterol', amount: 84 },
      { name: 'purine', amount: 138 },
    ],
  },
  {
    name: 'Chả lụa', nameSearch: 'cha lua', category: 'MEAT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 280 }, { name: 'protein', amount: 15 },
      { name: 'fat', amount: 22 }, { name: 'carbs', amount: 3 },
      { name: 'sodium', amount: 900 }, { name: 'cholesterol', amount: 60 },
      { name: 'purine', amount: 90 },
    ],
  },

  // ── SEAFOOD ──
  {
    name: 'Tôm', nameSearch: 'tom', category: 'SEAFOOD', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 99 }, { name: 'protein', amount: 18 },
      { name: 'fat', amount: 1.7 }, { name: 'carbs', amount: 1.7 },
      { name: 'sodium', amount: 119 }, { name: 'cholesterol', amount: 189 },
      { name: 'purine', amount: 150 },
    ],
  },
  {
    name: 'Cá thu', nameSearch: 'ca thu', category: 'SEAFOOD', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 205 }, { name: 'protein', amount: 19 },
      { name: 'fat', amount: 14 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 90 }, { name: 'cholesterol', amount: 70 },
      { name: 'purine', amount: 194 },
    ],
  },
  {
    name: 'Cá hồi', nameSearch: 'ca hoi', category: 'SEAFOOD', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 208 }, { name: 'protein', amount: 20 },
      { name: 'fat', amount: 13 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 59 }, { name: 'cholesterol', amount: 63 },
      { name: 'purine', amount: 170 },
    ],
  },
  {
    name: 'Mực', nameSearch: 'muc', category: 'SEAFOOD', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 92 }, { name: 'protein', amount: 15.6 },
      { name: 'fat', amount: 1.4 }, { name: 'carbs', amount: 3.1 },
      { name: 'sodium', amount: 300 }, { name: 'cholesterol', amount: 233 },
      { name: 'purine', amount: 100 },
    ],
  },
  {
    name: 'Cua', nameSearch: 'cua', category: 'SEAFOOD', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 87 }, { name: 'protein', amount: 18 },
      { name: 'fat', amount: 1.5 }, { name: 'carbs', amount: 0 },
      { name: 'sodium', amount: 293 }, { name: 'cholesterol', amount: 78 },
      { name: 'purine', amount: 136 },
    ],
  },

  // ── VEGETABLE ──
  {
    name: 'Rau muống', nameSearch: 'rau muong', category: 'VEGETABLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 19 }, { name: 'protein', amount: 2.6 },
      { name: 'fat', amount: 0.2 }, { name: 'carbs', amount: 2.1 },
      { name: 'fiber', amount: 2 }, { name: 'sodium', amount: 113 },
      { name: 'potassium', amount: 312 }, { name: 'calcium', amount: 77 },
      { name: 'iron', amount: 2.5 },
    ],
  },
  {
    name: 'Cà chua', nameSearch: 'ca chua', category: 'VEGETABLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 18 }, { name: 'protein', amount: 0.9 },
      { name: 'fat', amount: 0.2 }, { name: 'carbs', amount: 3.9 },
      { name: 'fiber', amount: 1.2 }, { name: 'sugar', amount: 2.6 },
      { name: 'sodium', amount: 5 }, { name: 'potassium', amount: 237 },
    ],
  },
  {
    name: 'Đậu hũ', nameSearch: 'dau hu', category: 'VEGETABLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 76 }, { name: 'protein', amount: 8 },
      { name: 'fat', amount: 4.8 }, { name: 'carbs', amount: 1.9 },
      { name: 'sodium', amount: 7 }, { name: 'calcium', amount: 350 },
      { name: 'purine', amount: 68 },
    ],
  },
  {
    name: 'Bắp cải', nameSearch: 'bap cai', category: 'VEGETABLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 25 }, { name: 'protein', amount: 1.3 },
      { name: 'fat', amount: 0.1 }, { name: 'carbs', amount: 5.8 },
      { name: 'fiber', amount: 2.5 }, { name: 'sodium', amount: 18 },
      { name: 'potassium', amount: 170 }, { name: 'calcium', amount: 40 },
    ],
  },
  {
    name: 'Dưa leo', nameSearch: 'dua leo', category: 'VEGETABLE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 16 }, { name: 'protein', amount: 0.7 },
      { name: 'fat', amount: 0.1 }, { name: 'carbs', amount: 3.6 },
      { name: 'fiber', amount: 0.5 }, { name: 'sodium', amount: 2 },
      { name: 'potassium', amount: 147 },
    ],
  },

  // ── FRUIT ──
  {
    name: 'Chuối', nameSearch: 'chuoi', category: 'FRUIT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 89 }, { name: 'protein', amount: 1.1 },
      { name: 'fat', amount: 0.3 }, { name: 'carbs', amount: 23 },
      { name: 'fiber', amount: 2.6 }, { name: 'sugar', amount: 12 },
      { name: 'sodium', amount: 1 }, { name: 'potassium', amount: 358 },
    ],
  },
  {
    name: 'Xoài', nameSearch: 'xoai', category: 'FRUIT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 60 }, { name: 'protein', amount: 0.8 },
      { name: 'fat', amount: 0.4 }, { name: 'carbs', amount: 15 },
      { name: 'fiber', amount: 1.6 }, { name: 'sugar', amount: 14 },
      { name: 'sodium', amount: 1 }, { name: 'potassium', amount: 168 },
    ],
  },
  {
    name: 'Ổi', nameSearch: 'oi', category: 'FRUIT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 68 }, { name: 'protein', amount: 2.6 },
      { name: 'fat', amount: 1 }, { name: 'carbs', amount: 14 },
      { name: 'fiber', amount: 5.4 }, { name: 'sugar', amount: 9 },
      { name: 'sodium', amount: 2 }, { name: 'potassium', amount: 417 },
    ],
  },
  {
    name: 'Bưởi', nameSearch: 'buoi', category: 'FRUIT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 38 }, { name: 'protein', amount: 0.8 },
      { name: 'fat', amount: 0.1 }, { name: 'carbs', amount: 9.6 },
      { name: 'fiber', amount: 1.1 }, { name: 'sugar', amount: 7 },
      { name: 'potassium', amount: 148 },
    ],
  },

  // ── SOUP ──
  {
    name: 'Canh chua', nameSearch: 'canh chua', category: 'SOUP', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 45 }, { name: 'protein', amount: 4 },
      { name: 'fat', amount: 1.5 }, { name: 'carbs', amount: 4 },
      { name: 'sodium', amount: 380 }, { name: 'purine', amount: 60 },
    ],
  },
  {
    name: 'Lẩu thái', nameSearch: 'lau thai', category: 'SOUP', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 85 }, { name: 'protein', amount: 7 },
      { name: 'fat', amount: 4 }, { name: 'carbs', amount: 5 },
      { name: 'sodium', amount: 800 }, { name: 'purine', amount: 90 },
    ],
  },

  // ── DESSERT ──
  {
    name: 'Chè đậu xanh', nameSearch: 'che dau xanh', category: 'DESSERT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 150 }, { name: 'protein', amount: 5 },
      { name: 'fat', amount: 1 }, { name: 'carbs', amount: 30 },
      { name: 'sugar', amount: 20 }, { name: 'sodium', amount: 15 },
    ],
  },
  {
    name: 'Bánh flan', nameSearch: 'banh flan', category: 'DESSERT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 150 }, { name: 'protein', amount: 5 },
      { name: 'fat', amount: 7 }, { name: 'carbs', amount: 19 },
      { name: 'sugar', amount: 16 }, { name: 'sodium', amount: 70 },
      { name: 'cholesterol', amount: 90 },
    ],
  },
  {
    name: 'Kem', nameSearch: 'kem', category: 'DESSERT', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 207 }, { name: 'protein', amount: 3.5 },
      { name: 'fat', amount: 11 }, { name: 'carbs', amount: 24 },
      { name: 'sugar', amount: 21 }, { name: 'sodium', amount: 80 },
      { name: 'cholesterol', amount: 44 },
    ],
  },

  // ── BEVERAGE ──
  {
    name: 'Nước cam', nameSearch: 'nuoc cam', category: 'BEVERAGE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 45 }, { name: 'protein', amount: 0.7 },
      { name: 'fat', amount: 0.2 }, { name: 'carbs', amount: 10 },
      { name: 'sugar', amount: 9 }, { name: 'sodium', amount: 1 },
      { name: 'potassium', amount: 200 },
    ],
  },
  {
    name: 'Trà sữa', nameSearch: 'tra sua', category: 'BEVERAGE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 168 }, { name: 'protein', amount: 2.5 },
      { name: 'fat', amount: 4 }, { name: 'carbs', amount: 32 },
      { name: 'sugar', amount: 28 }, { name: 'sodium', amount: 50 },
    ],
  },
  {
    name: 'Cà phê sữa đá', nameSearch: 'ca phe sua da', category: 'BEVERAGE', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 120 }, { name: 'protein', amount: 2 },
      { name: 'fat', amount: 3 }, { name: 'carbs', amount: 22 },
      { name: 'sugar', amount: 20 }, { name: 'sodium', amount: 30 },
    ],
  },

  // ── SNACK ──
  {
    name: 'Bánh tráng', nameSearch: 'banh trang', category: 'SNACK', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 331 }, { name: 'protein', amount: 7 },
      { name: 'fat', amount: 0.5 }, { name: 'carbs', amount: 73 },
      { name: 'fiber', amount: 1 }, { name: 'sodium', amount: 400 },
    ],
  },
  {
    name: 'Hạt điều', nameSearch: 'hat dieu', category: 'SNACK', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 553 }, { name: 'protein', amount: 18 },
      { name: 'fat', amount: 44 }, { name: 'carbs', amount: 30 },
      { name: 'fiber', amount: 3 }, { name: 'sodium', amount: 12 },
      { name: 'purine', amount: 160 },
    ],
  },

  // ── OTHER ──
  {
    name: 'Trứng gà', nameSearch: 'trung ga', category: 'OTHER', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 155 }, { name: 'protein', amount: 13 },
      { name: 'fat', amount: 11 }, { name: 'carbs', amount: 1.1 },
      { name: 'sodium', amount: 124 }, { name: 'cholesterol', amount: 373 },
      { name: 'purine', amount: 4 },
    ],
  },
  {
    name: 'Sữa bò', nameSearch: 'sua bo', category: 'OTHER', servingSize: 100,
    nutrients: [
      { name: 'calories', amount: 61 }, { name: 'protein', amount: 3.2 },
      { name: 'fat', amount: 3.3 }, { name: 'carbs', amount: 4.8 },
      { name: 'sugar', amount: 4.8 }, { name: 'sodium', amount: 50 },
      { name: 'calcium', amount: 113 },
    ],
  },
]
