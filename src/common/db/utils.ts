export function resolveCollectionName(name: string): string {
  let flag = false
  let newName = ''

  for (let i = 0; i < name.length; ++i) {
    if (name[i] === '-') flag = true
    else if (flag) newName += name[i]
    else newName += name[i]
  }

  return newName + 'Model'
}
