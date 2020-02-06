<template>
  <AppSidebar v-show="show"
              title="christmas-image-2018-12-25-00:01:12.jpg"
              :subtitle="createDate"
              :actions="menu"
              background="/index.php/core/preview?fileId=8&x=519&y=292&a=1&mode=cover&c=a45fc554048b4e0b282d96968ea7e84f&forceIcon=0"
              @close="show=false">
    <template #action>
      <button class="primary">
        Button 1
      </button>
      <input id="link-checkbox"
             name="link-checkbox"
             class="checkbox link-checkbox"
             type="checkbox">
      <label for="link-checkbox" class="link-checkbox-label">Do something</label>
    </template>
    <AppSidebarTab name="Details" icon="icon-details" :order="0">
      this is the chat tab
      <input style="width: 100%" type="text" placeholder="Task name" />
      <div class="row">
        <div class="col">
          <Multiselect v-model="value" :options="formatedOptions"
                       label="displayName" track-by="user"
                       :user-select="true" :loading="loading"
                       @change="showData"
          style="width: 100%"/>
        </div>
        <div class="col">
          <input type="number" placeholder="Amount" />
        </div>
      </div>



      <form>
        <fieldset>
          <legend>Текст</legend>
          <select>
            <option>Select type</option>
            <option>Banner</option>
            <option>Film</option>
          </select>
          <select>
            <option>Select material</option>
            <option>Litoj</option>
            <option>Perfo</option>
          </select>
          <input type="number" placeholder="Amount" />
        </fieldset>
      </form>
      <button class="inline reactive">
        <span class="icon icon-color icon-checkmark-color" />
      </button>
    </AppSidebarTab>
    <AppSidebarTab name="Files" icon="icon-files-dark" :order="1">
      files here
    </AppSidebarTab>
    <AppSidebarTab name="Comments" icon="icon-comment" :order="2">
      this is the comments tab
      <form>
        <input id="input-folder" icon="icon-files-dark" type="text" value="New folder">
        <input type="submit" value=" " class="icon-confirm">
      </form>
      <hr />
      <Actions>
        <ActionInput value="This is an input" icon="icon-files-dark" />
      </Actions>
      <ActionInput value="This is an input" icon="icon-files-dark" />
    </AppSidebarTab>
  </AppSidebar>
</template>

<script>
    import {AppSidebar,AppSidebarTab, Actions, Multiselect,
      ActionInput,} from "@nextcloud/vue";

    export default {
      name: "Sidebar",
      components: {
        Actions,
        ActionInput,

        AppSidebar,
        AppSidebarTab,
        Multiselect,
      },
      data(){
        return{
          date: new Date(),

          show: true,
          value: null,
          loading: false,
          options: ['admin', 'user1', 'user2', 'guest', 'group1']
        }
      },
      computed: {
        createDate(){
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false}
          return "Created: " + this.date.toLocaleDateString('ru-RU', options)
        },
        formatedOptions() {
          return this.options.map(item => {
            return {
              user: item,
              displayName: item,
              desc: `This is the ${item.startsWith('group') ? 'group' : 'user'} ${item}`,
              icon: item.startsWith('group') ? 'icon-group' : 'icon-user',
              isNoUser: item.startsWith('group')
            }
          })
        }
      },
      methods: {
        showData: function(){
          console.log(this.value)
        }
      }
    }
</script>

<style scoped>
  .app-sidebar-header__figure{
    padding-top: 18px;
  }
  .row{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
  }
  .col{
    width: 50%;
  }
  .col input{
    width: 100%;
  }

</style>
