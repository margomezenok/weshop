$(".dropdown_container").click(function(e) {
	// предотвратить сплытие события к родителям
	e.stopPropagation();
	// удалить класс .active у всех уже активных элементов кроме текущего
 	$(".dropdown_container.active").not(this).removeClass("active");
 	// добавить текущему элементу класс .active
 	$(this).toggleClass("active");
});

