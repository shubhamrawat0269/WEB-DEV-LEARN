import { useStepper } from '@vueuse/core';
import { useFormStore } from '~/store/form.store';

export enum FormData {
  PERSONAL_INFORMATION = 'Personal Information',
  BILLING_ADDRESS = 'Billing address',
  PAYMENT = 'Payment',
}

export const useFormStepper = () => {
  const formStore = useFormStore();

  const { index, current, goToNext, goToPrevious } = useStepper({
    'personal-information': {
      title: 'Personal Information',
    },
    'billing-address': {
      title: 'Billing address',
    },
    payment: {
      title: 'Payment',
    },
  });

  const validateStep = () => {
    if (current.value.title === FormData.PERSONAL_INFORMATION) {
      if (!formStore.step1Data.name || !formStore.step1Data.email) {
        alert('Name and email are required');
        return false;
      }
    } else if (current.value.title === FormData.BILLING_ADDRESS) {
      if (!formStore.step2Data.address || !formStore.step2Data.city) {
        alert('Address and city are required');
        return false;
      }
    } else if (current.value.title === FormData.PAYMENT) {
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

  const prevStep = () => goToPrevious();

  const submitForm = () => {
    if (validateStep()) {
      // Submit form logic
      console.log('Form submitted', formStore);
    }
  };

  return {
    index,
    current,
    nextStep,
    prevStep,
    submitForm,
    validateStep,
  };
};
