<template>
    <div>
        <div class="section1">
            <div class="section1_text">
                <h1>Welcome to Example Company.</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id
                    est
                    laborum.</p>
            </div>
            <img class="section1_image"
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>

        <div class="section2">
            <img class="section2_image"
                src="https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <div class="section2_text">
                <h1> intro into our company</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id
                    est
                    laborum.</p>
            </div>
        </div>

    </div>
</template>

<style>
.section1 {
    display: flex;
    align-items: center;
    margin-top: 10px;
    background: grey;
}

.section1_text {
    flex: 1;
}

.section2 {
    margin-top: 30px;
    display: flex;
    align-items: center;
    background: grey;
}

.section2_text {
    flex: 1;
}

.section2_image {
    margin-right: 20px;
    flex: 0
}
</style>


<script>
export default {
    name: 'HomeView'
}
</script>