class GiftService {

  fetchData(answer, callback) {
    const url = 'http://mrgiftinson.com/api/index.php?function=getNewStep&reponse=' + answer;
    fetch(url)
      .then( (response) => {
        return response.json()
      })
      .then( (json) => {
        console.log(json)
        this.data = json["data"];
      });
  }

}

export default GiftService;
