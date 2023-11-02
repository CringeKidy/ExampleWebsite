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

        <div class="meetTeam">
            <h1>Meet the team</h1>
            <ul>
                <li v-for="(person, key) in people.results" :key="key">
                    <div>
                        <img :src="require(`@/pepData/images/4.jpg`)" />
                        <p>Name: {{ person.name.first }} {{ person.name.last }}</p>
                        <p>Gender: {{ person.gender }}</p>
                        <p>Email: {{ person.email }}</p>
                        <p>username {{ person.login.username }}</p>
                    </div>
                </li>
            </ul>
        </div>


    </div>
</template>

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
        getImage(url) {
            console.log("got it" + url)
            console.log(`${__dirname}src/pepData/images/4.jpg`)

            const file = "H:/Utils/Projects/ExampleForGigs/example-webiste/src/pepData/images/4.jpg"
            return file
        }
    }
}
</script>