<template>
    <h1> Need to contact us?</h1>
    <h2> Use this form below to send us an email</h2>

    <form @submit.prevent>
        <div>
            <label>Send us a email</label>
            <input type="text" name="name" placeholder="Full Name">
        </div>
        <div>
            <label>What is your email</label>
            <input type="text" name="email" placeholder="Email">
        </div>
        <div>
            <label>Message</label>
            <input type="text" name="message" placeholder="Write your message!!">
        </div>
        <button>Send</button>
    </form>
</template>

<style></style>

<script>
export default {
    name: 'ContactView'
}
</script>