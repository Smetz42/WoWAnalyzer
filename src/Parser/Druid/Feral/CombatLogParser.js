import CoreCombatLogParser from 'Parser/Core/CombatLogParser';

import DamageDone from 'Parser/Core/Modules/DamageDone';

import RakeBleed from './Modules/Normalizers/RakeBleed';
import Abilities from './Modules/Abilities';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import CooldownThroughputTracker from './Modules/Features/CooldownThroughputTracker';

import RakeUptime from './Modules/Bleeds/RakeUptime';
import RipUptime from './Modules/Bleeds/RipUptime';
import FerociousBiteEnergy from './Modules/Features/FerociousBiteEnergy';
import RakeSnapshot from './Modules/Bleeds/RakeSnapshot';
import RipSnapshot from './Modules/Bleeds/RipSnapshot';

import ComboPointTracker from './Modules/ComboPoints/ComboPointTracker';
import ComboPointDetails from './Modules/ComboPoints/ComboPointDetails';

import SavageRoarUptime from './Modules/Talents/SavageRoarUptime';
import MoonfireUptime from './Modules/Talents/MoonfireUptime';
import SavageRoarDmg from './Modules/Talents/SavageRoarDmg';
import MoonfireSnapshot from './Modules/Talents/MoonfireSnapshot';

import SoulOfTheArchdruid from '../Shared/Modules/Items/SoulOfTheArchdruid';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Normalizers
    rakeBleed: RakeBleed,

    // FeralCore
    damageDone: [DamageDone, { showStatistic: true }],

    // Features
    alwaysBeCasting: AlwaysBeCasting,
    abilities: Abilities,
    cooldownThroughputTracker: CooldownThroughputTracker,
    ferociousBiteEnergy: FerociousBiteEnergy,

    // bleeds
    rakeUptime: RakeUptime,
    ripUptime: RipUptime,
    rakeSnapshot: RakeSnapshot,
    ripSnapshot: RipSnapshot,
    moonfireSnapshot: MoonfireSnapshot,

    // talents
    savageRoarUptime: SavageRoarUptime,
    moonfireUptime: MoonfireUptime,
    savageRoarDmg: SavageRoarDmg,

    // resources
    comboPointTracker: ComboPointTracker,
    comboPointDetails: ComboPointDetails,

    // items
    soulOfTheArchdruid : SoulOfTheArchdruid,
  };
}

export default CombatLogParser;
