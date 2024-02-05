import {ref} from 'vue';
import {defineStore} from 'pinia';
import { fetchWrapper } from '@/api/fetchWrapper';
import { useRouter } from 'vue-router';

export const useWorkerStore = defineStore("workers",()=>{

    const workers = ref(JSON.parse( localStorage.getItem('worker-workers') ));
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

    async function fetchWorkers(){
        loading.value = true;
        err.value = null;
        try{
            workers.value = await fetchWrapper.get('worker');
            
            err.value = null;
            localStorage.setItem("worker-workers", JSON.stringify(workers.value));
        }catch(e){
            err.value = e;
            loading.value= false;
        }finally{
            loading.value = false;
        }
    }

    function get(workerId){
        return workers.value.find(worker => worker.id === Number(workerId));      
    }

    function viewWorkers(categoryName){
        router.push(`/hire/${categoryName}`);
    }

    function viewDetails(workerId){
        router.push(`${window.location.pathname}/${workerId}`)
    }


    return {
            workers,
            categories,
            err,
            loading,
            get, 
            fetchWorkers, 
            fetchCategories, 
            viewWorkers, 
            viewDetails
    }
})