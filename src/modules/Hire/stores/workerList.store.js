import {ref} from 'vue';
import {defineStore} from 'pinia';
import { fetchWrapper } from '@/api/fetchWrapper';
import { useRouter } from 'vue-router';

export const workerListStore = defineStore("workers",()=>{

    const workers = ref(null);
    const err = ref(null);
    const loading = ref(false);
    const workerDetails = ref(null);

    const router = useRouter();

    async function getWorkerList(){
        loading.value =true;
        try{
            workers.value = await fetchWrapper.get('worker');
            err.value = null;
        }catch(e){
            err.value = e;
            loading.value= false;
        }finally{
            loading.value = false;
        }
    }

    function showDetails(workerId){
        workerDetails.value = workers.value[workerId];
        router.push(`${window.location.pathname}/${workerId}`);
    }


    return {workers, workerDetails, err, loading, getWorkerList, showDetails}
})