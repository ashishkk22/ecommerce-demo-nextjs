export type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;

export type AllOrNothing<T> = T | ToUndefinedObject<T>;
