"use client";
import { useState } from "react";
import ProgressBar from "./progressBar";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function StepOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [step, setStep] = useState(0);

  const nextStep = () => {
    step < 2 ? setStep(step + 1): 0  // 0 no hay mas pasos que el 3 ;
    
    console.log(step)
  };

  const backStep = () => {
    setStep(step - 1);

    console.log(step)
  };

  return (
    <>
      <Button onClick={onOpen}>Step 1</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Step 1</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            ¡Vaya! Parece que el tema que proporcionaste fue marcado como
            inapropiado. Por favor elige otro tema para tu ensayo y mantengamos
            la conversación positiva y atractiva. ¡Gracias!
          </ModalBody>
          <ModalFooter>
            {step === 0 ? (
              <Button onClick={onClose}>Cancel</Button>
            ) : (
              <Button onClick={backStep}>volver</Button>
            )}
            <Button onClick={nextStep}>Siguiente</Button>
            {/* TODO: Poner un boton con useState para recordar el valor e ir cambiando el contenido del modal */}
          </ModalFooter>
          { step ? (<ProgressBar step={step} />) : (<ProgressBar step={step} />)}
        </ModalContent>
      </Modal>
    </>
  );
}
