<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="email">Email:</label>
            <input v-model="form.email" type="email" id="email" />
            <span v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div>
            <label for="password">Password:</label>
            <input v-model="form.password" type="password" id="password" />
            <span v-if="errors.password">{{ errors.password }}</span>
        </div>

        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    email: '',
    password: '',
});

const errors = ref({});

const submitForm = () => {
    errors.value = validateForm(form.value);

    if (Object.keys(errors.value).length === 0) {
        // Submit the form, no errors
        console.log('Form Submitted:', form.value);
    } else {
        // Handle errors
        console.log('Form Errors:', errors.value);
    }
};

function validateForm(fields) {
    const errors = {};

    // Helper function to check if a value is an email
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Loop through the form fields and apply validation rules
    for (const [field, value] of Object.entries(fields)) {
        // Required fields check
        if (!value) {
            errors[field] = `${field} is required`;
            continue;
        }

        // Example: Email validation
        if (field === 'email' && !isValidEmail(value)) {
            errors[field] = 'Invalid email format';
            continue;
        }

        // Add other field-specific validation here...
    }

    return errors; // Returns an object with any errors found
}

</script>
