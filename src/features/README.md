# Feature Module

This is a **basic feature module template**.

Use this structure for any new feature (e.g. user, product, subject...).

---

## 📁 Structure

```id="f1"
feature/
  index.tsx        # main page / entry
  feature.api.ts   # API calls
  feature.types.ts # data types
  feature.scss     # styles
```

---

## 🧠 Responsibilities

### index.tsx

- Render UI
- Call API using React Query
- Handle loading state

---

### feature.api.ts

- Define API functions
- No React Query here
- No UI logic

---

### feature.types.ts

- Define types/interfaces
- No logic

---

### feature.scss

- Local styles for this feature
- Use scoped class (e.g. `.feature-page`)

---

## 🔄 Data Flow

```id="f2"
UI (index.tsx)
  ↓
useQuery
  ↓
feature.api.ts
  ↓
Backend
```

---

## 📌 Rules

- Do NOT call API directly in component → use API file
- Do NOT use useEffect for fetching → use React Query
- Keep structure simple
- Do not split files too early

---

## 🚀 Example

### feature.api.ts

```ts id="f3"
export const getList = async () => {
  const res = await api.get("/resource");
  return res.data;
};
```

---

### index.tsx

```tsx id="f4"
const { data, isLoading } = useQuery({
  queryKey: ["resource"],
  queryFn: getList,
});
```
