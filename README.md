## 🌍 Countries Explorer App

### ✅ Мета

Зробити SPA-додаток з **маршрутизацією** для перегляду країн світу за допомогою **Rest Countries API**.

---

## 📚 Основний функціонал

### 📌 Маршрути:

- `/` ➡️ **Головна сторінка** (вітає користувача або короткий опис про додаток)
- `/countries` ➡️ **Сторінка списку країн**
- `/countries/:countryName` ➡️ **Детальна сторінка країни**
- `/countries/:countryName/cities` ➡️ (не обов’язково) вкладений маршрут — перелік відомих міст (можеш додати сам або за допомогою GeoDB API)
- `*` ➡️ **NotFoundPage**, якщо URL не співпадає з жодним маршрутом

---

### 📌 Компоненти:

#### 1. `Navigation`

- Посилання на **`/`** і **`/countries`**
- Використовуєш `NavLink`

#### 2. `CountriesPage`

- GET-запит на **`https://restcountries.com/v3.1/all`**
- Показує список країн:
  - Назва
  - Прапор
  - Регіон
  - Популяція
- Кожна країна ➡️ кнопка або лінк на **`/countries/:countryName`**

#### 3. `CountryDetailsPage`

- GET-запит на **`https://restcountries.com/v3.1/name/:countryName`**
- Показує:
  - Назва
  - Прапор
  - Столиця
  - Регіон
  - Підрегіон
  - Населення
  - Мови
- Навігація на вкладені маршрути (наприклад, `/cities`)
- Використання `Outlet` для вкладених маршрутів

#### 4. `NotFoundPage`

- Виводить повідомлення "Сторінку не знайдено"
- Кнопка повернення на **Home (`/`)**

---

## 🛠️ Технології

- `react-router-dom`: `BrowserRouter`, `Routes`, `Route`, `NavLink`, `useParams`, `Outlet`
- API запити через `fetch` або `axios`
- Стилізація — на вибір: `CSS`, `Tailwind`, `Styled Components`

---

## 💡 Додатково (опціонально)

- Пошук по країні на сторінці `/countries` (фільтр по назві)
- Пагінація або **Load More**
- Темна/світла тема
- Анімації з `framer-motion`

---

## 🔗 API Документація

- **https://restcountries.com/**  
  Для списку країн ➡️ `https://restcountries.com/v3.1/all`  
  Для конкретної країни ➡️ `https://restcountries.com/v3.1/name/:name`

---

### 📂 Структура компонентів:

```
/src
  /components
    Navigation.jsx
    CountryList.jsx
    CountryCard.jsx
  /pages
    HomePage.jsx
    CountriesPage.jsx
    CountryDetailsPage.jsx
    NotFoundPage.jsx
  App.jsx
```

---
