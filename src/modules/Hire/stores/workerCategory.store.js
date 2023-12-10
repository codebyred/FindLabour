import {ref} from 'vue';
import {defineStore} from 'pinia';
import { fetchWrapper } from '@/api/fetchWrapper';
import { useRouter } from 'vue-router';

export const workerCategoryStore = defineStore("workerCategory",()=>{

    const categories = ref(null);
    const err = ref(null);
    const loading = ref(false);

    const router = useRouter();

    async function getCategories(){
        loading.value =true;
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

    function browse(categoryName){
        router.push(`/hire/${categoryName}`);
    }


    return {categories, err, loading, getCategories, browse}
})