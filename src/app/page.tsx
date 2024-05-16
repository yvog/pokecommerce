import { Metadata } from 'next';
import { Overview } from './components/overview/Overview';
import { Root } from './components/root/Root';
import { PAGE_DESCRIPTION } from './consts';

export const metadata: Metadata = {
  title: 'Pokecommerce | Your go-to Pokémon market place',
  description: PAGE_DESCRIPTION,
};

export default function OverviewPage() {
  return (
    <Root title="Pokémons">
      <Overview />
    </Root>
  );
}
