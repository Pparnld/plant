var app = angular.module("myModule", [])
			.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Aluminum Plant", p_image: "images/plant1.jpg", p_price:280, p_quanti: 1, p_sb : 0 },
					{p_id: "2", p_name: "Swiss Cheese Plant", p_image: "images/plant2.jpg", p_price: 400, p_quanti: 1, p_sb : 0},
					{p_id: "3", p_name: "Scarlet Star", p_image: "images/plant10.jpg", p_price: 480 , p_quanti: 1, p_sb : 0},
					{p_id: "4", p_name: "Silver Queen", p_image: "images/plant4.jpg", p_price: 320, p_quanti: 1, p_sb : 0},
					{p_id: "5", p_name: "Alocasia Cucullata (Buddha's Palm)", p_image: "images/plant5.jpg", p_price: 300, p_quanti: 1, p_sb : 0},
					{p_id: "6", p_name: "Parlor Palm", p_image: "images/plant9.jpg", p_price: 180, p_quanti: 1, p_sb : 0},
					{p_id: "7", p_name: "Powder Puff Cactus", p_image: "images/plant7.jpg", p_price: 250, p_quanti: 1, p_sb : 0},
					{p_id: "8", p_name: "Easter Cactus", p_image: "images/plant8.jpg", p_price: 270, p_quanti: 1, p_sb : 0},
					{p_id: "9", p_name: "Monstera Deliciosa (Albo)", p_image: "images/plant6.jpg", p_price: 1000, p_quanti: 1, p_sb : 0},	
					{p_id: "10", p_name: "Snake Plant", p_image: "images/plant3.jpg", p_price: 460, p_quanti: 1, p_sb : 0}
					
				];
				

				$scope.total = 0;
								

				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price , p_image: product.p_image, 
											p_quanti : product.p_quanti, p_sb : product.p_sb
						});
					}	
				}

					$scope.setsub = function(s){
						s.p_sb = s.p_price * s.p_quanti;
						return s.p_sb;
					}
					

				$scope.Total = function(cart){
					if (cart) {
						$scope.total += $scope.setsub(cart);
					}
					
					
				}
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= $scope.setsub(cart);
					}
				}
	});