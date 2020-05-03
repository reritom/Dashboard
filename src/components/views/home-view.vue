<template>
      <div>
        <div class="section-body">
        <div class="section-top">
          <h1 class="section-header">Cycle</h1>
          <h2 class="section-sub-header">Last updated 2 minutes ago</h2>
        </div>
        <div class="main-column">
          <div class="dash-row">
            <div class="col centre-col">
              <cycle-diagram></cycle-diagram>
            </div>
          </div>
          <div class="dash-row-thirds">
            <div class="col" @mouseover="lookingAt('item1')" @mouseleave="notLookingAt('item1')">
              <div class="card">
                <div class="card-header-menu">
                  <h1>Test to Test</h1>
                  <span class="icon-wrapper" @click="showModal=true">
                    <i class="fa fa-ellipsis-v"></i>
                  </span>
                </div>
                <div class="card-body">
                  <ul>
                    <li><span><i class="fas fa-user"></i></span><span>List item one</span></li>
                    <li><span><i class="fas fa-circle"></i></span><span>List item two</span></li>
                    <li><span><i class="fab fa-github-square"></i></span><span>List item three</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col" @mouseover="lookingAt('item2')" @mouseleave="notLookingAt('item2')">
              <div class="card">
                <div class="card-header">
                  <h1>Test to Test</h1>
                </div>
                <div class="card-body">
                  <ul>
                    <li><span><i class="fas fa-user"></i></span><span>List item one</span></li>
                    <li><span><i class="fas fa-circle"></i></span><span>List item two</span></li>
                    <li><span><i class="fab fa-github-square"></i></span><span>List item three</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col" @mouseover="lookingAt('item3')" @mouseleave="notLookingAt('item3')">
              <div class="card">
                <div class="card-header">
                  <h1>Test to Test</h1>
                </div>
                <div class="card-body">
                  <ul>
                    <li><span><i class="fas fa-user"></i></span><span>List item one</span></li>
                    <li><span><i class="fas fa-circle"></i></span><span>List item two</span></li>
                    <li><span><i class="fab fa-github-square"></i></span><span>List item three</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h1>Test to Test</h1>
                </div>
                <div class="card-body">
                  <ul>
                    <li><span><i class="fas fa-user"></i></span><span>List item one</span></li>
                    <li><span><i class="fas fa-circle"></i></span><span>List item two</span></li>
                    <li><span><i class="fab fa-github-square"></i></span><span>List item three</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h1>Test to Test</h1>
                </div>
                <div class="card-body">
                  <ul>
                    <li><span><i class="fas fa-user"></i></span><span>List item one</span></li>
                    <li><span><i class="fas fa-circle"></i></span><span>List item two</span></li>
                    <li><span><i class="fab fa-github-square"></i></span><span>List item three</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div :class="{'modal': true, 'modal-active': showModal}" @click="showModal=!showModal">
          <div class="modal-card">
            <div class="modal-card-header">
              <h1>Test to Test Actions</h1>
            </div>
            <div class="modal-card-body">

            </div>
          </div>
        </div>
      </div>
</template>

<script>
import CycleDiagram from '~/components/cycle-diagram.vue';
import { EventBus } from '~/main.js';

export default {
  name: 'HomeView',
  components: {
    CycleDiagram
  },
  data: function() {
    return {
      'showModal': false
    }
  },
  methods: {
    lookingAt(item) {
      //console.log("Mouseover", item);
      EventBus.$emit("lookingAt", item);
    },
    notLookingAt(item) {
      //console.log("Mouseoff", item);
      EventBus.$emit("notLookingAt", item);
    }
  }
}
</script>
