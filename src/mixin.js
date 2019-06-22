export const Mixin =  {
  created:function(){
    this.set_sysConst()  
  },
  methods:{
    mtd(){
      console.log('mixin mtd')
    },
    set_sysConst(){
        this.sysConst={
            STORAGE_KEY_showId : 'key_show_id',
            STORAGE_KEY_tasksData : 'key_tasks_dat',
            STORAGE_KEY_flash : 'strage_flash_key'
        }
    },
    /* local storage */
    set_exStorage(key, message){
        localStorage.setItem( key, JSON.stringify(message))
    },
    get_exStorage(key){
        var dat = JSON.parse(localStorage.getItem(key) || '[]')
        console.log( 'dat.len='+ dat.length )
        return dat
    }
  }
}
