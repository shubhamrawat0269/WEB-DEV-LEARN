<script setup>

function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const downloadTextFile = () => {
    const content = 'Hello, this is a sample1 text file!';
    const fileName = 'sample1';
    downloadFile(content, fileName, 'application/pdf');
};
</script>

<template>
    <button @click="downloadTextFile">Download Text File</button>
</template>