
const DELETED_ITEMS = [
    'iron-jetpacks:bubble_capacitor',
    'iron-jetpacks:steel_capacitor',
    'iron-jetpacks:electrum_capacitor',
    'iron-jetpacks:platinum_capacitor',
    'iron-jetpacks:netherite_capacitor',
    'iron-jetpacks:bubble_cell',
    'iron-jetpacks:steel_cell',
    'iron-jetpacks:electrum_cell',
    'iron-jetpacks:platinum_cell',
    'iron-jetpacks:netherite_cell',
    'iron-jetpacks:basic_coil',
    'iron-jetpacks:advanced_coil',
    'iron-jetpacks:elite_coil',
    'iron-jetpacks:expert_coil',
    'iron-jetpacks:ultimate_coil',
    'createdieselgenerators:plant_oil',
    'createdieselgenerators:ethanol',
    'createdieselgenerators:plant_oil_bucket',
    'createdieselgenerators:ethanol_bucket',
    'nethersdelight:iron_machete',
    'nethersdelight:diamond_machete',
    'nethersdelight:netherite_machete',
    'nethersdelight:golden_machete',
    'adventurez:raw_venison',
    'adventurez:cooked_venison',
    'fishofthieves:earthworms',
    'fishofthieves:grubs',
    'blockus:oak_barrel',
    'blockus:birch_barrel',
    'blockus:jungle_barrel',
    'blockus:acacia_barrel',
    'blockus:dark_oak_barrel',
    'blockus:crimson_barrel',
    'blockus:warped_barrel',
    'blockus:white_oak_barrel',
    'blockus:bamboo_barrel',
    'blockus:charred_barrel',
    'bakery:strawberry_seeds',
    'create_jetpack:jetpack_placeable',
    'techreborn:deepslate_ruby_ore',
    'techreborn:deepslate_sapphire_ore',
    'techreborn:sapphire_helmet',
    'techreborn:sapphire_chestplate',
    'techreborn:sapphire_leggings',
    'techreborn:sapphire_boots',
    'techreborn:sapphire_pickaxe',
    'techreborn:sapphire_axe',
    'techreborn:sapphire_hoe',
    'techreborn:sapphire_sword',
    'techreborn:sapphire_spade',
    'techreborn:ruby_helmet',
    'techreborn:ruby_chestplate',
    'techreborn:ruby_leggings',
    'techreborn:ruby_boots',
    'techreborn:ruby_pickaxe',
    'techreborn:ruby_axe',
    'techreborn:ruby_hoe',
    'techreborn:ruby_sword',
    'techreborn:ruby_spade',
    'croptopia:knife',
    'onlyhammers:obsidian_hammer'
];
REIEvents.hide('item', (event) => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
const DELETED_FLUIDS = [
    'createdieselgenerators:plant_oil',
    'createdieselgenerators:ethanol',
];
REIEvents.hide('fluid', (event) => {
    DELETED_FLUIDS.forEach(id => event.hide(id));
});