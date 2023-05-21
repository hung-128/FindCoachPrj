export default {
    registerCoach(context, payload) {
        const newCoach = {
            id: 'c3',
            firstName: payload.data.first,
            lastName: payload.data.last,
            description: payload.data.description,
            areas: payload.data.areas,
            hourlyRate: payload.data.rate,
        };
        context.commit('registerCoach', { data: newCoach })
    }
};
