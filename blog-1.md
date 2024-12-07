# The Significance of Union and Intersection Types in TypeScript


## Union Types
A **Union Type** allows a variable to hold multiple types. It’s defined using the pipe (`|`) symbol. For example:

```typescript
let value: string | number;
value = "Rashed";
value = 23;
```

Union types are useful when a value can vary in type but still needs to be handled safely, allowing you to check and process values accordingly:

```typescript
function formatInput(value: string | number): string {
  return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2);
}
```

## Intersection Types
An **Intersection Type** combines multiple types into one. A variable must have all properties of the specified types. For example:

```typescript
interface Employee {
  id: number;
  name: string;
}

interface Manager {
  department: string;
}

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  id: 1,
  name: "Rashed",
  department: "Tech"
};
```

Intersection types are helpful when combining multiple objects or interfaces into one complex type.
