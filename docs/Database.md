# Database

> HIKARI uses Base44 entities as its database layer.

## Entity Schema

Entities are JSON Schema objects in `base44/entities/*.jsonc`:

```json
{
  "name": "Task",
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "status": { "type": "string", "enum": ["todo", "done"], "default": "todo" }
  },
  "required": ["title"],
  "security": { "read": "owner_or_admin", "create": "owner_or_admin", "update": "owner_or_admin", "delete": "admin" }
}
```

## Built-in Fields

Every entity has: `id`, `created_date`, `updated_date`, `created_by_id`.

## Security Levels

| Level | Description |
|---|---|
| `public` | Anyone can read/create |
| `owner_or_admin` | Owner or admin only |
| `admin` | Admin only |

## SDK Operations

```javascript
base44.entities.Task.list('-created_date', 20);
base44.entities.Task.filter({ status: 'todo' });
base44.entities.Task.create({ title: 'New task' });
base44.entities.Task.update(id, { status: 'done' });
base44.entities.Task.delete(id);
base44.entities.Task.bulkCreate([{ title: 'A' }, { title: 'B' }]);
```

## Realtime

```javascript
useEffect(() => {
  const unsubscribe = base44.entities.Task.subscribe((event) => { });
  return unsubscribe;
}, []);
```
