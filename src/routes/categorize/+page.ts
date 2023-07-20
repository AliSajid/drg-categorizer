import type { PageLoad } from './$types';
import { db } from '$lib/firebase';
import { collection, getCountFromServer, query, where } from 'firebase/firestore';

export const load = (async () => {

    const terms = await getCountFromServer(collection(db, 'drgs_test')).then((response) => response.data().count);
    const uncategorized_query = query(collection(db, 'drgs_test'), where('category', '==', ''));
    const uncategorized = await getCountFromServer(uncategorized_query).then((response) => response.data().count);
    const categorized_query = query(collection(db, 'drgs_test'), where('category', '!=', ''));
    const categorized = await getCountFromServer(categorized_query).then((response) => response.data().count);
    return {termCount: terms,
            uncategorizedCount: uncategorized,
        categorizedCount: categorized};
}) satisfies PageLoad;