## API Response Handling

The app assumes backend returns standard format:

{
code: number,
message: string,
data: any
}

---

### Auto Unwrap

Interceptor will automatically return:
→ response.data.data

---

### Fallback

If response does not match standard format:
→ return raw response

---

### IMPORTANT

All APIs SHOULD follow standard format

Non-standard APIs (e.g. login) are exceptions
