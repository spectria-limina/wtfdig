import type { PageLoad } from './$types';
import { umadFightConfig, umadStrats } from './data';

export const load: PageLoad = () => {
  return {
    strats: umadStrats,
    config: umadFightConfig
  };
};
