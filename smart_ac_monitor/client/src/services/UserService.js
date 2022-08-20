export async function getAC() {

    try {
        const response = await fetch('https://espol-smart-ac-control.herokuapp.com/ac_stats/ac_1');
        return await response.json();
    } catch (error) {
        return [];
    }
}
