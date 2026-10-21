import type { Weapon } from '../data/weapons'

export function filterWeapons (weapons: Weapon[], type: string) {
    if (type === 'all') return weapons
    return  weapons.filter((weapon) => weapon.type === type)
}