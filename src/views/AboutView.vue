<template>
    <div>
        <h1>About Example company</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Egestas tellus rutrum tellus
            pellentesque eu tincidunt tortor. Suspendisse interdum consectetur libero id faucibus. Vivamus arcu felis
            bibendum ut tristique et egestas quis ipsum. Elementum pulvinar etiam non quam lacus. Tempus egestas sed sed
            risus pretium quam vulputate dignissim suspendisse. Purus semper eget duis at tellus at. Augue mauris augue
            neque gravida in fermentum et sollicitudin ac. Netus et malesuada fames ac turpis egestas integer. Imperdiet
            proin fermentum leo vel orci. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Gravida arcu ac
            tortor dignissim convallis aenean et tortor at. Mauris sit amet massa vitae. Venenatis urna cursus eget nunc
            scelerisque viverra mauris in aliquam. Sagittis orci a scelerisque purus semper eget duis at tellus.</p>
        <p>Arcu ac tortor dignissim convallis aenean et tortor. Consequat interdum varius sit amet mattis vulputate enim
            nulla. Diam ut venenatis tellus in metus vulputate eu scelerisque. Ac odio tempor orci dapibus ultrices in
            iaculis nunc. Viverra mauris in aliquam sem fringilla ut. Sit amet mattis vulputate enim nulla aliquet porttitor
            lacus luctus. Justo eget magna fermentum iaculis eu non diam phasellus. Dolor sit amet consectetur adipiscing
            elit pellentesque. Quis auctor elit sed vulputate mi sit amet. Enim lobortis scelerisque fermentum dui faucibus
            in ornare. Nec sagittis aliquam malesuada bibendum. Feugiat nibh sed pulvinar proin gravida hendrerit. Integer
            quis auctor elit sed vulputate. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque
            habitant. Sed id semper risus in hendrerit gravida. Pharetra convallis posuere morbi leo urna molestie. Egestas
            sed tempus urna et pharetra. Viverra tellus in hac habitasse platea dictumst vestibulum. Nullam ac tortor vitae
            purus faucibus ornare suspendisse.</p>
        <p>Mollis aliquam ut porttitor leo a diam sollicitudin. At tellus at urna condimentum. Eu feugiat pretium nibh
            ipsum. Vitae nunc sed velit dignissim sodales. Etiam erat velit scelerisque in. Est ullamcorper eget nulla
            facilisi etiam dignissim diam. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Sit amet
            purus gravida quis blandit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sit amet
            porttitor eget dolor morbi. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.</p>

        <div class="teamHeader">
            <h1>Meet the team</h1>
            <h4>Data Provided by <a href="https://randomuser.me" target="about:blank"
                    style="color:blue; text-decoration: underline;">randomuser.me</a> so information is not correct please
                dont try and call/email them</h4>
        </div>
        <div class="meetTeam">
            <div class="teamMember" v-for="(person, key) in people.results" :key="key">
                <img :src="getImage(person.picture.thumbnail)" />
                <p>Hey there my Name is: {{ person.name.first }} {{ person.name.last }}</p>
                <p>I am {{ person.dob.age }} years of age</p>
                <p>And im from {{ person.location.country }}</p>
                <button @click="email(person.email)" alt="my email is {{ person.email }}">📧</button>
                <button @click="phone(person.cell)" alt="my Phone number is {{ person.cell }}">📞</button>
            </div>

        </div>


    </div>
</template>

<style>
.teamHeader {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
}

.meetTeam {
    column-count: 3;
    column-gap: 20px;
}

.meetTeam div {
    break-inside: avoid-column;
    margin-bottom: 20px;
    text-align: center;
}

.meetTeam p {
    text-align: center;
}

.teamMember {
    background-color: grey;
}
</style>


<script>
const peopleJson = require('../pepData/people.json')

export default {
    name: "AboutView",
    data() {
        return {
            people: []
        }
    },
    mounted() {
        this.people = peopleJson
    },
    methods: {
        getImage(ImageName) {
            ImageName = ImageName.split('/')
            ImageName = ImageName[ImageName.length - 1]

            const file = require(`D:/LaptopProjects/ExampleWebsite/src/pepData/images/${ImageName}`)
            return file
        },
        phone(phone) {
            window.location.href = `tel:${phone}`;
        },
        email(email) {
            window.location.href = `mailto:${email}`;
        }
    }
}
</script>