<script>
    if(window.opener){
        try{
            window.opener.ODKL.loginCallback({{ $user }});
        }
        catch(e){}
        window.open("", "_self", "");
        window.close();
    }
</script>