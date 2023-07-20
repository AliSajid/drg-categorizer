<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<p>Total Terms: {data.termCount}</p>
<p>Uncategorized Terms: {data.uncategorizedCount}</p>
<p>Categorized Terms: {data.categorizedCount}</p>
