<script>
    const placeField = document.getElementById('idPlaceField');
    const fromField = document.getElementById('idFromField');
    const toField = document.getElementById('idToField');
    const searchButton = document.getElementById('idSearchField');
    const messageDiv = document.getElementById('message');
    
    searchButton.addEventListener('click', function() {
      const place = placeField.value;
      const from = fromField.value;
      const to = toField.value;
      
      const message = `Place: ${place}, From: ${from}, To: ${to}`;
      
      alert(message);
    });
</script>
