class QuizService {
    getAllTests() {
        return fetch(`https://tgryl.pl/quiz/tests`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((json) => {
                return json;
            }).catch((error) => {
                console.error(error);
            });
    }

    getTestDetails(id) {
        return fetch(`https://tgryl.pl/quiz/test/${id}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((json) => {
                return json;
            }).catch((error) => {
                console.error(error);
            });
    }
}

export default new QuizService();