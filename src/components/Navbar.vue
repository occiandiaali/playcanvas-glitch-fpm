<template>
  <BNavbar
    v-b-color-mode="'dark'"
    toggleable="lg"
    sticky="top"
    class="w-100"
    variant="dark"
  >
    <BNavbarBrand
      ><RouterLink to="/" class="link">Blindate</RouterLink></BNavbarBrand
    >
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem
          ><RouterLink to="/about" class="link">About</RouterLink></BNavItem
        >
        <BNavItem
          ><RouterLink to="/experiences" class="link"
            >Experiences</RouterLink
          ></BNavItem
        >
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="Settings" right>
          <BDropdownItem href="#">EN</BDropdownItem>
          <BDropdownItem href="#">ES</BDropdownItem>
          <BDropdownItem href="#">RU</BDropdownItem>
          <BDropdownItem href="#">FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Account</em>
          </template>
          <BDropdownItem
            ><RouterLink to="/profile" class="link" id="profile-link"
              >Profile</RouterLink
            >
            <BAvatar
              variant="info"
              src="https://placekitten.com/100/100"
              size="sm"
            />
          </BDropdownItem>
          <BDropdownItem
            ><RouterLink to="/" class="link"
              >Sign Out</RouterLink
            ></BDropdownItem
          >
        </BNavItemDropdown>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: beige;
}
.link:hover {
  color: brown;
}
#profile-link {
  margin-right: 8px;
}
</style>
