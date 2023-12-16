import {ref} from 'vue';
import {defineStore} from 'pinia';
import { fetchWrapper } from '@/api/fetchWrapper';
import { useRouter } from 'vue-router';

export const workerStore = defineStore("workers",()=>{

    const list = ref(JSON.parse( localStorage.getItem('worker-list') ));
    const categories = ref(null);

    const err = ref(null);
    const loading = ref(false);

    const router = useRouter();

    async function fetchCategories(){
        loading.value =true;
        err.value = null;
        try{
            categories.value = await fetchWrapper.get('worker-categories');
            err.value = null;
        }catch(e){
            err.value = e;
            loading.value= false;
        }finally{
            loading.value = false;
        }
    }

    async function fetchList(){
        loading.value = true;
        err.value = null;
        try{
            list.value = await fetchWrapper.get('worker');
            
            err.value = null;
            localStorage.setItem("worker-list", JSON.stringify(list.value));
        }catch(e){
            err.value = e;
            loading.value= false;
        }finally{
            loading.value = false;
        }
    }

    function get(workerId){
        return list.value.find(worker => worker.id === Number(workerId));      
    }

    function viewList(categoryName){
        router.push(`/hire/${categoryName}`);
    }

    function viewDetails(workerId){
        router.push(`${window.location.pathname}/${workerId}`)
    }


    return {
            list,
            categories,
            err,
            loading,
            get, 
            fetchList, 
            fetchCategories, 
            viewList, 
            viewDetails
    }
})