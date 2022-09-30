import { Entry } from "./CommonTypes";

export const filterObject = <T extends object>(
    obj: T,
    fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
  ) => {
    return Object.fromEntries(
      (Object.entries(obj) as Entry<T>[]).filter(fn)
    ) as Partial<T>
  }

export const sliceStringsInArray = (arr: string[], slice: number[]) => arr.map((str)=> str.slice(...slice))
