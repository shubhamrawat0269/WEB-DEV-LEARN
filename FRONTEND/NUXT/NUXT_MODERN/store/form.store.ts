import { defineStore } from 'pinia';
import { ref } from 'vue';

interface stepOne {
  name: string;
  email: string;
}

interface stepTwo {
  address: string;
  city: string;
}

interface stepThree {
  paymentMethod: string;
  cardDetails: string;
}

export const useFormStore = defineStore('form-data', () => {
  // state
  const step1Data: Ref<stepOne> = ref({ name: '', email: '' });
  const step2Data: Ref<stepTwo> = ref({ address: '', city: '' });
  const step3Data: Ref<stepThree> = ref({ paymentMethod: '', cardDetails: '' });

  //actions

  const setStep1Data = (data: stepOne) => {
    step1Data.value = data;
  };
  const setStep2Data = (data: stepTwo) => {
    step2Data.value = data;
  };
  const setStep3Data = (data: stepThree) => {
    step3Data.value = data;
  };

  return {
    step1Data,
    step2Data,
    step3Data,
    setStep1Data,
    setStep2Data,
    setStep3Data,
  };
});
