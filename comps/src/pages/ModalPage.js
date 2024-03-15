import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal"

const ModalPage = () => {
  const[showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const ActionBar = <Button primary onClick={handleClose}>I Accept</Button>
  const modal = <Modal onClose={handleClose} actionBar={ActionBar}>
    <p>Here is  an important agreement for you to accept</p>
    </Modal>

  return(
    <div>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit leo sit amet tortor efficitur sagittis. Sed gravida, augue vel congue egestas, neque purus rhoncus risus, sit amet mollis odio odio non arcu. Aenean eu lorem cursus, lobortis nibh nec, efficitur ante. Praesent id metus sit amet purus vehicula pharetra. Nam faucibus turpis vel enim molestie, at consectetur tellus porta. Nulla nec pretium diam, id sodales magna. Curabitur sed porta quam. Morbi fermentum sed libero eget volutpat. Donec mollis, tellus sit amet dignissim pretium, magna sapien egestas sapien, quis maximus sapien turpis et elit.
      </p>
    </div>
  )
}
export default ModalPage;