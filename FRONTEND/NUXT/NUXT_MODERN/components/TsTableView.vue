<template>
    <div>
        <!-- Table to display data -->
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Invoice Number</th>
                    <th>Project Number</th>
                    <th>Status</th>
                    <th>Total Price</th>
                    <th>Label</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <!-- Editable fields with v-model binding to allow inline editing -->
                    <td>
                        <input type="date" v-model="item.date" @input="handleFieldChange(item)" />
                    </td>
                    <td>
                        <input type="text" v-model="item.invoiceNumber" @input="handleFieldChange(item)" />
                    </td>
                    <td>
                        <input type="text" v-model="item.projectNumber" @input="handleFieldChange(item)" />
                    </td>
                    <td>
                        <input type="text" v-model="item.status" @input="handleFieldChange(item)" />
                    </td>
                    <td>
                        <input type="number" v-model="item.totalPrice" @input="handleFieldChange(item)" />
                    </td>
                    <td>
                        <input type="text" v-model="item.label" @input="handleFieldChange(item)" />
                        <button v-if="item.isModified" @click="saveRow(item)">Save</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const tableData = ref([])
const data = ref([
    {
        "date": "2024-11-05",
        "invoiceNumber": "INV-001",
        "projectNumber": "PRJ-101",
        "status": "Completed",
        "totalPrice": 1500.00,
    },
    {
        "date": "2024-11-06",
        "invoiceNumber": "INV-002",
        "projectNumber": "PRJ-102",
        "status": "In Progress",
        "totalPrice": 3000.00,
    },
    {
        "date": "2024-11-07",
        "invoiceNumber": "INV-003",
        "projectNumber": "PRJ-103",
        "status": "Pending",
        "totalPrice": 4500
    },
    {
        "date": "2024-11-08",
        "invoiceNumber": "INV-004",
        "projectNumber": "PRJ-104",
        "status": "Completed",
        "totalPrice": 5000.00,
    },
    {
        "date": "2024-11-09",
        "invoiceNumber": "INV-005",
        "projectNumber": "PRJ-105",
        "status": "In Progress",
        "totalPrice": 2000.00,
    }
]
);

const fetchTableData = async () => {
    try {
        tableData.value = data.value.map((item) => ({
            ...item,
            label: '',
            isModified: false,
        }))

    } catch (error) {
        console.error('Error fetching table data:', error)
    }
}

// Detect changes in a row to show the Save button
const handleFieldChange = (item) => {
    item.isModified = true
}

// Save only the modified row data
const saveRow = async (item) => {
    try {
        const { date, invoiceNumber, projectNumber, status, totalPrice, label } = item
        const payload = { date, invoiceNumber, projectNumber, status, totalPrice, label }

        // await axios.post('/api/save-row', payload)

        // Mark the row as saved
        item.isModified = false
    } catch (error) {
        console.error('Error saving row:', error)
    }
}

onMounted(() => {
    fetchTableData()
})
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    border: 1px solid #ddd;
}

button {
    margin-top: 20px;
}
</style>
