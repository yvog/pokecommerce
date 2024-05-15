import { Modal } from './modal';

export default function AbilityDetailPageModal({
  params: { abilityId },
}: {
  params: { abilityId: string };
}) {
  return (
    <Modal>
      Ability detail page modal:
      {abilityId}
    </Modal>
  );
}
