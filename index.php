<?php
include 'ADMIN/dbconn.php';
include 'header.php';
$query = "SELECT * FROM banerphoto";
$data = mysqli_query($conn, $query);
$total = mysqli_num_rows($data);


if ($total > 0) {

    ?>

<div class="notice-board">
    <div class="notice-content">
        <p>This is your notice content.</p>
        <p>This is another notice content.</p>
        <!-- Add more notice content as needed -->
    </div>
</div>
<div class="banner-container">

<?php
    while($result = mysqli_fetch_assoc($data)){
       echo "<img class='banner-img' src='".$result['url']."' alt='Banner Image'>";
    }
    
} else {
    echo "No records found in the banerphoto table.";
}
?>

</div>
</div>

<script src="script.js"></script>
</body>
</html>
