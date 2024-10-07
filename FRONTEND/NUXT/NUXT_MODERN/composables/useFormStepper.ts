import { ref } from 'vue';
import { useStepper } from '@vueuse/core';
import { useFormStore } from '~/store/form.store';

export const useFormStepper = () => {
  const formStore = useFormStore();

  const { currentStep, goToNext, goToPrev } = useStepper({
    steps: [1, 2, 3],
    initial: 1,
  });

  const validateStep = () => {
    if (currentStep.value === 1) {
      if (!formStore.step1Data.name || !formStore.step1Data.email) {
        alert('Name and email are required');
        return false;
      }
    } else if (currentStep.value === 2) {
      if (!formStore.step2Data.address || !formStore.step2Data.city) {
        alert('Address and city are required');
        return false;
      }
    } else if (currentStep.value === 3) {
      if (
        !formStore.step3Data.paymentMethod ||
        !formStore.step3Data.cardDetails
      ) {
        alert('Payment details are required');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) goToNext();
  };

  const prevStep = () => goToPrev();

  const submitForm = () => {
    if (validateStep()) {
      // Submit form logic
      console.log('Form submitted', formStore);
    }
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    submitForm,
  };
};
