import React from 'react'

import BansheeEssence from '../fusion-items/blue-items/BansheeEssence'
import BlackDragonsTailbone from '../fusion-items/blue-items/BlackDragonsTailbone'
import BracerOfSalvation from '../fusion-items/blue-items/BracerOfSalvation'
import Broadsword from '../fusion-items/blue-items/Broadsword'
import BulwarkOfVitality from '../fusion-items/blue-items/BulwarkOfVitality'
import ChargerBoots from '../fusion-items/blue-items/ChargerBoots'
import ChippedBlade from '../fusion-items/blue-items/Chipped-Blade'
import CloudWalkers from '../fusion-items/blue-items/CloudWalkers'
import DemonicLongsword from '../fusion-items/blue-items/DemonicLongsword'
import DwarvishChestplate from '../fusion-items/blue-items/DwarvishChestplate'
import EmeraldCuirass from '../fusion-items/blue-items/EmeraldCuirass'
import GemOfFortitude from '../fusion-items/blue-items/GemOfFortitude'
import GemOfVigor from '../fusion-items/blue-items/GemOfVigor'
import GoldenMallet from '../fusion-items/blue-items/GoldenMallet'
import HeavyBreastplate from '../fusion-items/blue-items/HeavyBreastplate'
import LegendaryGemstone from '../fusion-items/blue-items/LegendaryGemstone'
import LunasBoots from '../fusion-items/blue-items/LunasBoots'
import MaskOfSacrifice from '../fusion-items/blue-items/MaskOfSacrifice'
import ObsidianTome from '../fusion-items/blue-items/ObsidianTome'
import RitualBlade from '../fusion-items/blue-items/RitualBlade'
import RotatingHacksaw from '../fusion-items/blue-items/RotatingHacksaw'
import RunicEulogy from '../fusion-items/blue-items/RunicEulogy'
import ScepterOfProphecy from '../fusion-items/blue-items/ScepterOfProphecy'
import SoothsayerHandwraps from '../fusion-items/blue-items/SoothsayerHandwraps'
import ThornedPauldrons from '../fusion-items/blue-items/ThornedPauldrons'
import VikingHelmet from '../fusion-items/blue-items/VikingHelmet'

import CloakOfWisdom from '../fusion-items/red-items/CloakOfWisdom'
import CrescentStaff from '../fusion-items/red-items/CrescentStaff'
import HurricaneBlade from '../fusion-items/red-items/HurricaneBlade'
import MastersCap from '../fusion-items/red-items/MastersCap'
import PaladinsChestplate from '../fusion-items/red-items/PaladinsChestplate'
import PureJadeChest from '../fusion-items/red-items/PureJadeChest'
import SongbirdRing from '../fusion-items/red-items/SongbirdRing'
import SphereOfTheSands from '../fusion-items/red-items/SphereOfTheSands'
import TyrantsHelmet from '../fusion-items/red-items/TyrantsHelmet'
import Widowmaker from '../fusion-items/red-items/Widowmaker'

const FusionItems = () => {

    //Components for dynamic component creation
    const components = {
        //Blue Items
        "banshee-essence": BansheeEssence,
        "black-dragon's-tailbone": BlackDragonsTailbone,
        "bracer-of-salvation": BracerOfSalvation,
        "broadsword": Broadsword,
        "bulwark-of-vitality": BulwarkOfVitality,
        "charger-boots": ChargerBoots,
        "chipped-blade": ChippedBlade,
        "cloud-walkers": CloudWalkers,
        "demonic-longsword": DemonicLongsword,
        "dwarvish-chestplate": DwarvishChestplate,
        "emerald-cuirass": EmeraldCuirass,
        "gem-of-fortitude": GemOfFortitude,
        "gem-of-vigor": GemOfVigor,
        "golden-mallet": GoldenMallet,
        "heavy-breastplate": HeavyBreastplate,
        "legendary-gemstone": LegendaryGemstone,
        "luna's-boots": LunasBoots,
        "mask-of-sacrifice": MaskOfSacrifice,
        "obsidian-tome": ObsidianTome,
        "ritual-blade": RitualBlade,
        "rotating-hacksaw": RotatingHacksaw,
        "runic-eulogy": RunicEulogy,
        "scepter-of-prophecy": ScepterOfProphecy,
        "soothsayer-handwraps": SoothsayerHandwraps,
        "thorned-pauldrons": ThornedPauldrons,
        "viking-helmet": VikingHelmet,

        //Red Items
        "cloak-of-wisdom": CloakOfWisdom,
        "crescent-staff": CrescentStaff,
        "hurricane-blade": HurricaneBlade,
        "master's-cap": MastersCap,
        "paladins-chestplate": PaladinsChestplate,
        "pure-jade-chest": PureJadeChest,
        "songbird-ring": SongbirdRing,
        "sphere-of-the-sands": SphereOfTheSands,
        "tyrants-helmet": TyrantsHelmet,
        "widowmaker": Widowmaker
    }

    //dummy data for testing
    const hero = {
        fusion_items: {
            purple: [
                "tribal-battleaxe",
                "stealth-cape",
                "clasp-of-life",
                "golden-mallet",
                "luna's-boots",
                "emerald-cuirass"
            ],
            purple1: [
                "ice-smasher",
                "destruction",
                "tribal-battleaxe",
                "heavy-club",
                "carnage-mallet",
                "banshee-essence"
            ],
            purple2: [
                "goblet-of-the-ancients",
                "doomsday-blade",
                "heavenly-amulet",
                "elvish-etude",
                "guardian-plate",
                "clasp-of-life"
            ],
            purple3: [
                "spartan-dagger",
                "goblin's-scimitar",
                "healing-stone",
                "pride's-protector",
                "adamantite-scimitar",
                "runic-crystal-ball"
            ],
            purple4: [
                "zealot-battleplate",
                "cosmic-shield",
                "demonic-visage",
                "azrael's-roar",
                "whisperwind-bow",
                "cap-of-souls"
            ],
            orange: [
                "unknown",
                "aegis",
                "nemean-hide",
                "titanic-axe",
                "demon's-skull",
                "cap-of-souls"
            ],
            orange1: [
                "unknown",
                "renegade's-armor",
                "atlantean-battleaxe",
                "commander's-blade",
                "armor-of-shadows",
                "mystic-dragonscale"
            ],
            orange2: [
                "unknown",
                "master's-cap",
                "sphere-of-the-sands",
                "stormrider-armor",
                "shadow-slayer",
                "beastly-guardian"
            ]
        }
    }

    /************************* JSX *************************/
    return (
        <section id="fusion-items" className="guide-section">
            <div className="section-header">
                <h2>Fusions</h2>
            </div>
            <div className="section-body">
                <div className="purple-fusions">
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple</span></h4>
                        {
                            hero.fusion_items.purple.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+1</span></h4>
                        {
                            hero.fusion_items.purple1.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+2</span></h4>
                        {
                            hero.fusion_items.purple2.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+3</span></h4>
                        {
                            hero.fusion_items.purple3.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="prp-txt">Purple+4</span></h4>
                        {
                            hero.fusion_items.purple4.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                </div>

                <div className="orange-fusions">
                    <div className="fusion-box">
                        <h4><span className="org-txt">Orange</span></h4>
                        {
                            hero.fusion_items.orange.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="org-txt">Orange+1</span></h4>
                        {
                            hero.fusion_items.orange1.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                    <div className="fusion-box">
                        <h4><span className="org-txt">Orange+2</span></h4>
                        {
                            hero.fusion_items.orange2.map((i, idx) => {
                                const TagName = components[i]
                                return <TagName key={idx} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FusionItems