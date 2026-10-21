import type { Weapon } from '../data/weapons'

export function searchWeapons (weapons: Weapon[], keyword: string) {
    if (!keyword) return weapons
    return  weapons.filter((weapon) => weapon.name.includes(keyword))
}