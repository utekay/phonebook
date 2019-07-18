<template lang="html" functional>
  <div class="user-info">
    <img v-bind:src="props.thumbnail"
      v-bind:alt="props.fullName"
      class="user-info__photo"
    />
    <div class="user-info__rest">
      <router-link v-bind:to="{ name: 'details', params: { uuid: props.uuid } }"
        class="user-info__full-name"
      >
        {{ props.fullName }}
      </router-link>
      <p class="user-info__birth-date">
        {{ props.birthDate }}
      </p>
    </div>
  </div>
</template>

<style lang="css">
.user-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}
.user-info__photo {
  border-radius: 50%;
  margin-right: 15px;
}
.user-info__birth-date {
  margin: 3px 0;
  font-size: 0.8rem;
}
.user-info__full-name {
  text-transform: uppercase;
}
</style>
