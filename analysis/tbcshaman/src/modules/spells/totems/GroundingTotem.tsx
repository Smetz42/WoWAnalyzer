import { Trans } from '@lingui/macro';
import { SpellLink } from 'interface';
import Analyzer, { Options } from 'parser/core/Analyzer';
import { Ability } from 'parser/core/Events';
import BoringValue from 'parser/ui/BoringValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';
import * as SPELLS from '../../../SPELLS';
import TotemTracker from '../../features/TotemTracker';
import AbilityTracker from 'parser/shared/modules/AbilityTracker';

class GroundingTotem extends Analyzer {
    static dependencies = {
        totemTracker: TotemTracker,
        abilityTracker: AbilityTracker,
    };

    protected totemTracker!: TotemTracker;
    protected abilityTracker!: AbilityTracker;

    constructor(options: Options) {
        super(options);
    }

    get groundedSpells() {
        return this.totemTracker.totemEvents(SPELLS.GROUNDING_TOTEM).map(totemEvent => {
            return totemEvent?.spellsGrounded;
        })
    }

    get groundedSpellCount() {
        return this.groundedSpells.filter(((ability: Ability) => !!ability)).length;
    }

    get totemCastCount() {
        return this.abilityTracker.getAbility(SPELLS.GROUNDING_TOTEM).casts;
    }

    statistic() {
        if (this.totemCastCount === 0) return null;

        return (
            <Statistic
                size="flexible"
                category={STATISTIC_CATEGORY.GENERAL}
                position={STATISTIC_ORDER.UNIMPORTANT(89)}
                dropdown={
                    <table className="table table-condensed">
                        <thead>
                            <tr>
                                <th>
                                    <Trans id="common.groundingtotem.cast">Cast</Trans>
                                </th>
                                <th>
                                    <Trans id="common.groundingtotem.spellgrounded">Spell Grounded</Trans>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.groundedSpells.map((ability: Ability, index: number) => (
                                <tr>
                                    <td>
                                        {index}
                                    </td>
                                    <td>
                                        {ability ? <SpellLink id={ability.guid} /> : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            >
                <BoringValue label={<><SpellLink id={SPELLS.GROUNDING_TOTEM} /></>}>
                    {this.groundedSpellCount} Spells Grounded
                </BoringValue>
            </Statistic>
        );
    }
}

export default GroundingTotem;
