import {
    background,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

type Props = {
  step: number;
};

const appear = {
  transition: ".5s ease",
};

export default function ProgressBar({ step }: Props) {
  const activeStepText = steps[step]?.description || "";

  return (
    <Stack>
      <Stepper index={step} size="sm" gap="0">
        {steps.map((s, index) => (
          <Step key={index}>
            <StepIndicator style={appear}>
              <StepStatus complete={<StepIcon style={appear} />} />
            </StepIndicator>
            <StepSeparator style={appear} />
          </Step>
        ))}
      </Stepper>
      <Text>
        Step {step + 1}: <b>{activeStepText}</b>
      </Text>
    </Stack>
  );
}
