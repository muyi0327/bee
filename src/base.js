import path from 'path'

export const root = path.resolve('./')
export const dest = path.relative(root, 'dist')
export const src = path.relative(root, 'src')
export const packages = path.relative(root, 'packages')
export const docs = path.relative(root, 'docs')
